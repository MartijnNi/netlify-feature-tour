
function ExerciseFinish() {
  return (
    <>
      <h2>You did it!</h2>
      <p>
        You’ve successfully created your first Netlify Function! Great work!
      </p>
    </>
  );
}

export default function FunctionTester({ children }) {
  const [output, setOutput] = useState();

  function handleClick() {
    fetch("/.netlify/functions/hello-world")
      .then((res) => res.text())
      .then((result) => setOutput(result))
      .catch((err) => {
        console.log(err);
        setOutput(
          `Please create your function and
run \`netlify dev\` in your CLI.`
        );
      });
  }

  return output === "hello world!" ? (
    <ExerciseFinish />
  ) : (
    <ExerciseStart handleClick={handleClick} output={output}>
      {children}
    </ExerciseStart>
  );
}
