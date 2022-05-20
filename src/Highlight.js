// Highlight function inspired by https://thewebdev.info/2021/11/13/how-to-highlight-text-using-react/
const Highlight = ({ text = "", highlight = "" }) => {

  if (!highlight.trim()) return <span>{text}</span>;
  const regex = new RegExp(`(${highlight})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      {parts.filter(String).map((part, i) => {
        return regex.test(part) ? (
          <mark key={i}>{part}</mark>
        ) : (
          <span key={i}>{part}</span>
        );
      })}
    </>
  );

}

export default Highlight;
