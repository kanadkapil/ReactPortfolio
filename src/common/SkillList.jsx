function SkillList({ src, skill }) {
  return (
    <span>
      <img  src={src} alt="Checkmark icon" />
      <p className="text-3xl">{skill}</p>
    </span>
  );
}

export default SkillList;
