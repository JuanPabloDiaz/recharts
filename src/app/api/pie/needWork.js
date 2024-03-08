// export default function handler(req, res) {
//   if (req.method === "GET") {
//     const data01 = [
//       {
//         name: "Group A",
//         value: 400,
//       },
//       {
//         name: "Group B",
//         value: 300,
//       },
//       {
//         name: "Group C",
//         value: 300,
//       },
//       {
//         name: "Group D",
//         value: 200,
//       },
//       {
//         name: "Group E",
//         value: 278,
//       },
//       {
//         name: "Group F",
//         value: 189,
//       },
//     ];
//     res.status(200).json({ data01 });
//   } else if (req.method === "GET2") {
//     const data02 = [
//       {
//         name: "Group A",
//         value: 2400,
//       },
//       {
//         name: "Group B",
//         value: 4567,
//       },
//       {
//         name: "Group C",
//         value: 1398,
//       },
//       {
//         name: "Group D",
//         value: 9800,
//       },
//       {
//         name: "Group E",
//         value: 3908,
//       },
//       {
//         name: "Group F",
//         value: 4800,
//       },
//     ];
//     res.status(200).json({ data02 });
//   } else {
//     res.status(405).json({ message: "Method not allowed" });
//   }
// }
