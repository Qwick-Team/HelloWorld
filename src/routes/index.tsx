import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import './index.css';

export default component$(() => {
  return (
    <>
      <h1>Hello World👋</h1>
      <div>
        Building with Qwick is so cool and qwick!
        <br />
        Happy coding.
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
