export async function GET() {
  const funnel = [
    {
      value: 100,
      name: "展现",
      fill: "#8884d8",
    },
    {
      value: 80,
      name: "点击",
      fill: "#83a6ed",
    },
    {
      value: 50,
      name: "访问",
      fill: "#8dd1e1",
    },
    {
      value: 40,
      name: "咨询",
      fill: "#82ca9d",
    },
    {
      value: 26,
      name: "订单",
      fill: "#a4de6c",
    },
  ];

  return Response.json({ funnel });
}
