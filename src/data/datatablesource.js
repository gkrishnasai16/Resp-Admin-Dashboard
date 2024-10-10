export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    }
  },
  {
    field: "email",
    headerName: "Email",
    width: 230
  },

  {
    field: "age",
    headerName: "Age",
    width: 100
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    }
  }
];

//temporary data
export const userRows = [
  {
    id: 1,
    username: "Snow",
    name: "Jon",
    surName: "Snow",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    phone: "+33 627 315 612",
    adress: "7 rue du mur Got North",
    country: "Da North",
    email: "1snow@gmail.com",
    status: "active",
    age: 35
  },
  {
    id: 2,
    username: "jlannister",
    name: "Jamie",
    surName: "Lannister",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    phone: "+33 627 315 612",
    adress: "7 rue du mur Got North",
    country: "Da North",
    email: "2snow@gmail.com",
    status: "passive",
    age: 42
  },
  {
    id: 3,
    username: "tlannister",
    name: "Tyrion",
    surName: "Lannister",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    phone: "+33 627 315 612",
    adress: "7 rue du mur Got North",
    country: "Da North",
    email: "3snow@gmail.com",
    status: "pending",
    age: 32
  },
  {
    id: 4,
    username: "Stark",
    name: "Jon",
    surName: "Stark",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    phone: "+33 627 315 612",
    adress: "7 rue du mur Got North",
    country: "Da North",
    email: "4snow@gmail.com",
    status: "active",
    age: 16
  },
  {
    id: 5,
    username: "Targaryen",
    name: "Daenerys",
    surName: "Targaryen",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    phone: "+33 627 315 612",
    adress: "7 rue du mur Got North",
    country: "Da North",
    email: "5snow@gmail.com",
    status: "passive",
    age: 22
  },
  {
    id: 6,
    username: "Melisandre",
    name: "Meli",
    surName: "Sandre",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    phone: "+33 627 315 612",
    adress: "7 rue du mur Got North",
    country: "Da North",
    email: "6snow@gmail.com",
    status: "active",
    age: 15
  },
  {
    id: 7,
    username: "Aryastark",
    name: "Arya",
    surName: "Stark",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    phone: "+33 627 315 612",
    adress: "7 rue du mur Got North",
    country: "Da North",
    email: "7snow@gmail.com",
    status: "passive",
    age: 14
  },
  {
    id: 8,
    username: "grandmoineau",
    name: "Grand",
    surName: "Moineau",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    phone: "+33 627 315 612",
    adress: "7 rue du mur Got North",
    country: "Da North",
    email: "8snow@gmail.com",
    status: "active",
    age: 36
  },
  {
    id: 9,
    username: "Roxie",
    name: "Grand",
    surName: "Moineau",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    phone: "+33 627 315 612",
    adress: "7 rue du mur Got North",
    country: "Da North",
    email: "snow@gmail.com",
    status: "pending",
    age: 65
  },
  {
    id: 10,
    username: "Roxie",
    name: "Grand",
    surName: "Moineau",
    img:
      "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    phone: "+33 627 315 612",
    adress: "7 rue du mur Got North",
    country: "Da North",
    email: "snow@gmail.com",
    status: "active",
    age: 65
  }
];
