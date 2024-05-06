// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { toTitle } from "../../utils/tools";
// import SelectionFilter from "../common/SelectionFilter";
// import { setFilter } from "../../features/filterSlice";

// const Navbar = () => {
//   const { filterSlice } = useSelector((data) => data);
//   const dispatch = useDispatch();
//   const applyFilter = (key, newval) => {
//     dispatch(setFilter({ key, value: newval }));
//   };
//   function truncateString(str, maxLength) {
//     if (str.length > maxLength) {
//       return str.slice(0, maxLength) + '...';
//     }
//     return str;
//   }
  

//   //   return (
//   //     <div
//   //       style={{
//   //         width: "100%",
//   //         display: "flex",
//   //         alignItems: "flex-start", 
//   //         justifyContent: "flex-start", 
//   //         flexWrap: "wrap",
//   //         gap: "2px" ,
//   //       }}
//   //     >
//   //       {Object.entries(filterSlice).map(([key, val]) => (
//   //         <div style={{ minWidth: "150px", margin: "2px" }} key={key}>
//   //           <SelectionFilter
//   //             label={toTitle(key)}
//   //             // placeholder={toTitle(key)}
//   //             placeholder={truncateString(toTitle(key), 20)}
//   //             options={val.options}
//   //             value={val.value}
//   //             setValue={(newval) => applyFilter(key, newval)}
//   //           />
//   //         </div>
//   //       ))}
//   //     </div>
//   //   )
//   // };

//   return (
//     <div
//       style={{
//         width: "100%",
//         display: "flex",
//         alignItems: "flex-start",
//         justifyContent: "flex-start",
//         flexWrap: "wrap",
//         gap: "2px",
//       }}
//     >
//       {Object.entries(filterSlice).map(([key, val]) => (
//         <div style={{ minWidth: "150px", margin: "2px" }} key={key}>
//           <SelectionFilter
//             label={toTitle(key)}
//             // placeholder={toTitle(key)}
//             placeholder={truncateString(toTitle(key), 20)}
//             style={{ maxWidth: "150px" }} // Adjust the maxWidth as per your design
//             options={val.options}
//             value={val.value}
//             setValue={(newval) => applyFilter(key, newval)}
//           />
//         </div>
//       ))}
//     </div>
//   );
// };


// export default Navbar;



import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {toTitle } from "../../utils/tools";
import SelectionFilter from "../common/SelectionFilter";
import { setFilter } from "../../features/filterSlice";

const Navbar = () => {
  const { filterSlice } = useSelector((data) => data);
  const dispatch = useDispatch();
  const applyFilter = (key, newval) => {
    dispatch(setFilter({ key, value: newval }));
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "start",
        flexWrap: "wrap",
      }}
    >
      {Object.entries(filterSlice).map(([key, val]) => (
        <div style={{ minWidth: "190px" }} key={key}>
          <SelectionFilter
            label={toTitle(key)}
            placeholder={toTitle(key)}
            options={val.options}
            value={val.value}
            setValue={(newval) => applyFilter(key, newval)}
          />
        </div>
      ))}
    </div>
  );
};

export default Navbar;