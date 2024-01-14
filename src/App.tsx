import MainRouter from './router/mainRouter'
function App() {
  
  return (
    <MainRouter/>
  )
}

export default App

// interface subMenulist {
//   caption: string
//   permission?: number[] | null
//   subMenu?: subMenuitem[]
//   url?: string | null
//   active: boolean
//   callback?: () => void
// }
// interface subMenuitem {
//   caption: string
//   url?: string | null
//   active: boolean
//   callback?: () => void
// }
// const [list, setlist] = useState<subMenulist[]>(
//   [
//     {
//       caption: 'sub1',
//       active: false,
//       subMenu: [
//         {
//           caption: "sub 1-1",
//           active: false,
//           url: "sub 1-1"
//         },
//         {
//           caption: "sub 1-2",
//           active: false,
//           callback() {
//             console.log("sub1-3")
//           }
//         },
//       ]

//     },
//     {
//       caption: 'sub2',
//       active: false,
//       subMenu: [
//         {
//           caption: "sub 2-1",
//           active: false,
//           url: "sub2-1"
//         },
//         {
//           caption: "sub 2-2",
//           active: false,
//           callback() {
//             console.log("sub2-2")
//           }
//         }
//       ]
//     },
//     {
//       caption: 'sub3',
//       active: false,
//       url: 'google.com'
//     },
//     {
//       caption: 'sub4',
//       active: false,
//       callback: () => {
//         console.log("click sub4");

//       }
//     }

//   ]
// )
{/* {list &&
  list?.map((item, index) =>
  <div key={index} className={item.active == false ? "" : "active"} >
      {item.url ?
        <h1>
          <a href={item.url}>
            {item.caption}
          </a>
        </h1>
        :
        <h1 onClick={item.callback && item.callback} >
          {item.caption}
        </h1>

      }
      {item.subMenu &&
        <>
          {item.subMenu?.map((item, index) =>
            <div key={index}>
              {item.url ?
                <h3>
                  <a href={item.url}>
                    {item.caption}
                  </a>
                </h3>
                :
                <h3 onClick={item.callback && item.callback} >
                  {item.caption}
                </h3>

              }
            </div>
            )}
        </>
      }
    </div>
  )
} */}