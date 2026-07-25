const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-semibold text-white">
        {title}
      </h2>

      <p className="text-slate-400 mt-1">
        {subtitle}
      </p>
    </div>
  );
};

export default SectionTitle;