import Card from "./Card";
const data = [
  {
    image:
      "https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Young Professional",
  },
  {
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
    title: "Business Woman",
  },
  {
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZyUyMHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Remote Worker",
  },
];

const RightSection = () => {
  return (
    <div className="flex gap-6 overflow-x-auto pb-4 hide-scrollbar">
      {data.map((item, index) => (
        <Card
          id={index}
          key={index}
          image={item.image}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default RightSection;