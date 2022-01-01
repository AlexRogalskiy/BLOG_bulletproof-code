import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import useSWR from "swr";
import { fetcher } from "../utils/http.helpers";

export function useComments() {
  // *
  const { getAccessTokenSilently } = useAuth0();

  // *
  const [text, setText] = useState("");
  const [url, setUrl] = useState(null);

  // *
  const query = new URLSearchParams({ url });
  const { data: comments, mutate } = useSWR(
    `/api/comment?${query.toString()}`,
    fetcher
  );

  // *
  useEffect(() => {
    const url = window.location.origin + window.location.pathname;
    setUrl(url);
  }, []);

  // *
  const onSubmit = async (e) => {
    e.preventDefault();

    const token = await getAccessTokenSilently();

    try {
      await fetch("/api/comment", {
        method: "POST",
        body: JSON.stringify({ url, text }),
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });

      setText("");
      await mutate();
    } catch (err) {
      console.log("ERROR:", err);
    }
  };

  // *
  const onDelete = async (comment) => {
    const token = await getAccessTokenSilently();

    try {
      await fetch("/api/comment", {
        method: "DELETE",
        body: JSON.stringify({ url, comment }),
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });

      await mutate();
    } catch (err) {
      console.log("ERROR:", err);
    }
  };

  // *
  return { text, setText, comments, onSubmit, onDelete };
}
