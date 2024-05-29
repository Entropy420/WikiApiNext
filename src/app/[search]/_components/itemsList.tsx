import "./itemsList.scss";

export default function ItemsList({ items }: { items: Result[] }) {
  return (
    <section className="item-list">
      {Object.values(items).map((item) => (
        <article key={item.pageid}>
          {item.thumbnail?.source && (
            <img
              src={item.thumbnail.source}
              alt={item.title}
              height={item.thumbnail.height}
              width={item.thumbnail.width}
              loading="lazy"
            />
          )}
          <div>
            <h3>{item.title}</h3>
            <p>{item.extract}</p>
          </div>
        </article>
      ))}
    </section>
  );
}
