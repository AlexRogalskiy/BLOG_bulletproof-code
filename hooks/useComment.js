import { useEffect, useState } from "react";
import useSWR from "swr";

export function useComments() {
  // *
  const { getAccessTokenSilently } = useAuth0();

  // *
  const [text, setText] = useState("");
  const [url, setUrl] = useState(null);

  // *
  const { data: comments, mutate } = useSWR(
    () => {
      const query = new URLSearchParams({ url });
      return `/api/comment?${query.toString()}`;
    },
    {
      initialData: [],
    }
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
    const token = getAccessTokenSilently();

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
