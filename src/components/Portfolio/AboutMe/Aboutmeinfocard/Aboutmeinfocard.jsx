const Aboutmeinfocard = ({ iconUrl, text }) => {
  return (
    <div className="bg-purple-900 border-2 border-purple-600 rounded-lg p-6 mb-8">
      <div className="w-16 h-16 bg-purple-700 flex items-center justify-center rounded-md mb-4">
        <img src={iconUrl} className="w-8 h-auto" alt={text} />
      </div>
      <p className="text-base">{text}</p>
    </div>
  );
};

export default Aboutmeinfocard;
