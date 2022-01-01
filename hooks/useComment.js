import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import useSWR from "swr";
import { fetcher } from "../utils/http.helpers";
import { moods } from "../utils/mood.helpers";

export function useComments() {
  // *
  const { getAccessTokenSilently } = useAuth0();

  // *
  const [text, setText] = useState("");
  const [mood, setMood] = useState(moods[2]);
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

    console.log(`e`, e);

    try {
      await fetch("/api/comment", {
        method: "POST",
        body: JSON.stringify({ url, text, mood }),
        headers: {
          Authorization: token,
          "Content-Type": "application/json",
        },
      });

      setText("");
      setMood(moods[2]);
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
  return { text, setText, mood, setMood, comments, onSubmit, onDelete, moods };
}
