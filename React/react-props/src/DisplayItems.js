export default function DisplayItems({ listItem }) {
  console.log(listItem);
  return (
    <>
      {listItem.map((list) => (
        <li key={list.id}>{list.text}</li>
      ))}
    </>
  );
}
