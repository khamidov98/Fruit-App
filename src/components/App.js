import  './App.css';
import Fruit from "./Fruit";

const data = [
  {id:1, img: 'https://delitorta.ru/upload/iblock/d75/d7590c0636667ba9b77b7120f2ffe38a.jpg', title:'Apple', uom:'02', size: '02', unit:'$8.99', total:"17.99$"},
  {id:2, img: 'https://avatars.mds.yandex.net/i?id=29ecc0e308c1af08d765dcf53f3f2676_l-5280171-images-thumbs&n=13', title:'Apricot', uom:'03', size: '02', unit:'$8.99', total:"17.99$"},
  {id:3, img: 'https://avatars.mds.yandex.net/i?id=d0b0fc2198fbf5fd267c6988a7a6a073-5682063-images-thumbs&n=13', title:'Banana', uom:'05', size: '02', unit:'$8.99', total:"17.99$"},
  {id:4, img: 'https://avatars.mds.yandex.net/i?id=fbed877d82518e908a780b8e3a3bb22a-4600463-images-thumbs&n=13', title:'Kiwi', uom:'04', size: '06', unit:'$8.99', total:"17.99$"},
  {id:5, img: 'https://avatars.mds.yandex.net/i?id=db6347306972b94766ce02cd70da7a31-4285148-images-thumbs&n=13', title:'Pomigranate', uom:'07', size: '02', unit:'$8.99', total:"17.99$"},
  {id:6, img: 'https://avatars.mds.yandex.net/i?id=58889ef45d65b833d317c36fcd29f59a-5858861-images-thumbs&n=13', title:'Strawberry', uom:'08', size: '02', unit:'$8.99', total:"17.99$"},
  {id:7, img: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614555597_13-p-kartinka-ananasa-na-belom-fone-14.jpg', title:'Pineapple', uom:'09', size: '02', unit:'$8.99', total:"17.99$"},
  {id:8, img: 'https://catherineasquithgallery.com/uploads/posts/2021-03/1614576122_22-p-ogurets-na-belom-fone-30.jpg', title:'Cucumber', uom:'02', size: '02', unit:'$8.99', total:"17.99$"},
];
function App() {
  return (
    <div className="container">

      {
        // qayta chizib berish uchun
        data.map((value,index) => {
          return(
              <Fruit data={value}/>
          )
        })
      }

      {/*<Fruit/>*/}
      {/*<Fruit/>*/}
      {/*<Fruit/>*/}
      {/*<Fruit/>*/}
      {/*<Fruit/>*/}
      {/*<Fruit/>*/}
      {/*<Fruit/>*/}
      {/*<Fruit/>*/}
      {/*<Fruit/>*/}
    </div>
  );
}

export default App;
