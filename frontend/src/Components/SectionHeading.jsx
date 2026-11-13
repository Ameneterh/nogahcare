export default function SectionHeading({
  eyebrow,
  title,
  text,
  centered = false,
}) {
  return (
    <div className={`section-heading ${centered ? "centered" : ""}`}>
      {eyebrow && (
        <span className="flex items-center gap-2 text-[#168e83] font-bold text-lg uppercase mb-3 eyebrow">
          {eyebrow}
        </span>
      )}
      <h2 className="text-lg md:text-2xl my-2 whitespace-pre-line">{title}</h2>
      {text && <p className="text-sm font-normal">{text}</p>}
    </div>
  );
}
