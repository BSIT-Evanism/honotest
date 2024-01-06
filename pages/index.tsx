import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [doublename, setDoubleName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const userName = new URLSearchParams(window.location.search);
      const use = userName.get("user");
      const res = await fetch(`/api/users/${use}`);
      const ns = await res.json();
      setName(ns.name);
      setDoubleName(ns.dub);
    };
    fetchData();
  }, []);

  if (!name) return <p>Loading...</p>;

  return (
    <p>
      Hello {name} double name is {doublename}
    </p>
  );
}
