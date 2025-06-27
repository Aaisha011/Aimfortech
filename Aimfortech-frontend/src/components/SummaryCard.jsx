const SummaryCard = ({ title, value, color, icon:Icon }) => (
  <div className={`p-4 ${color} text-white rounded-lg shadow`}>
    <Icon className="mb-3"/>  
    <h4 className="text-sm">{title}</h4>
    <p className="text-2xl font-bold">{value}</p>
  </div>
);

export default SummaryCard;
