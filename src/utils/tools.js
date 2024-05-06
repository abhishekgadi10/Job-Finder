export async function postReq(apiurl, body, header = {}) {
    try {
      let res = await fetch(apiurl, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          ...header,
        },
        body: JSON.stringify(body),
      });
  
      if (res.ok) {
        res = await res.text();
        return {
          message: "",
          success: true,
          data: JSON.parse(res),
        };
      }
    } catch (er) {
      console.log({ er });
      return {
        message: "Something went wrong on client side.",
        success: false,
      };
    }
  }
  /**
   *
   * @param {*} obj Object
   * @returns New Object Without refrence
   */
  export const noRef = (obj) => {
    return JSON.parse(JSON.stringify(obj));
  };
  export const toTitle = (str) => {
    return str.split("_").join(" ");
  };
  
  /**
   * filter rules
   */
  export const initialFilterState = {
    Min_Experience: {
      options: [
        {
          label: 0,
          val: 0,
        },
        {
          label: 1,
          val: 1,
        },
        {
          label: 2,
          val: 2,
        },
        {
          label: 3,
          val: 3,
        },
        {
          label: 4,
          val: 4,
        },
        {
          label: 5,
          val: 5,
        },
        {
          label: 6,
          val: 6,
        },
        {
          label: 7,
          val: 7,
        },
        {
          label: 8,
          val: 8,
        },
        {
          label: 9,
          val: 9,
        },
      ],
      key: "minExp",
      value: [],
    },
  
    Company: {
      options: [
        {
          label: "HPE",
          val: "HPE",
        },
        {
            label: "Samsung",
            val: "Samsung",
        },
        {
            label: "Western Digital",
            val: "Western Digital",
        },
        {
          label: "LG",
          val: "LG",
        },
        {
          label: "Sony",
          val: "Sony",
        },
        {
          label: "Adobe Systems",
          val: "Adobe Systems",
        },
        {
          label: "HP",
          val: "HP",
        },
        {
          label: "HCL",
          val: "HCL",
        },
        {
          label: "Greenlight",
          val: "Greenlight",
        },
        {
          label: "Apple",
          val: "Apple",
        },
        {
          label: "Asus",
          val: "Asus",
        },
        {
          label: "Intel Corporation",
          val: "Intel Corporation",
        },
        {
          label: "Microsoft",
          val: "Microsoft",
        },
        {
          label: "Cisco",
          val: "Cisco",
        },
        {
          label: "Dell Technologies",
          val: "Dell Technologies",
        },
        {
          label: "Mercari",
          val: "Mercari",
        },
        {
          label: "Oracle",
          val: "Oracle",
        },
        {
          label: "Logwards",
          val: "Logwards",
        },
        {
          label: "Amazon",
          val: "Amazon",
        },
        {
          label: "Aurigo",
          val: "Aurigo",
        },
        {
          label: "Nike",
          val: "Nike",
        },
        {
          label: "Meta",
          val: "Meta",
        },
        {
          label: "Twitter",
          val: "Twitter",
        },
        {
          label: "Zeta",
          val: "Zeta",
        },
        {
          label: "Netflix",
          val: "Netflix",
        },
        {
          label: "MasterCard",
          val: "MasterCard",
        },
        
        {
          label: "Lumen",
          val: "Lumen",
        },
        {
          label: "Microchip",
          val: "Microchip",
        },
        {
          label: "Google",
          val: "Google",
        },
        {
          label: "Huawei",
          val: "Huawei",
        },
        {
          label: "Micron",
          val: "Micron",
        },
        {
          label: "Yokogawa",
          val: "Yokogawa",
        },
        {
          label: "Nikon",
          val: "Nikon",
        },
        
        {
          label: "Spotify",
          val: "Spotify",
        },
        {
          label: "PayPal",
          val: "PayPal",
        },
        {
          label: "Visa",
          val: "Visa",
        },
        {
          label: "Adobe Inc.",
          val: "Adobe Inc.",
        },
        
        {
          label: "Qualcomm",
          val: "Qualcomm",
        },
        {
          label: "Yahoo",
          val: "Yahoo",
        },
        {
          label: "Panasonic",
          val: "Panasonic",
        },
        {
          label: "Xiaomi",
          val: "Xiaomi",
        },
        
        {
          label: "Tesla",
          val: "Tesla",
        },
        {
          label: "Airbus",
          val: "Airbus",
        },
        {
          label: "Airbnb",
          val: "Airbnb",
        },
        {
          label: "Canon",
          val: "Canon",
        },
        
        {
          label: "Uber",
          val: "Uber",
        },
        {
          label: "LinkedIn",
          val: "LinkedIn",
        },
      ],
      key: "companyName",
      value: [],
    },
  
    Location: {
      options: [
        {
          label: "Bangalore",
          val: "Bangalore",
        },
        {
          label: "Remote",
          val: "Remote",
        },
        {
          label: "Chennai",
          val: "Chennai",
        },
        {
          label: "Hyderabad",
          val: "Hyderabad",
        },
        {
          label: "Pune",
          val: "Pune",
        },
        {
          label: "Mumbai",
          val: "Mumbai",
        },
        {
          label: "Delhi Ncr",
          val: "Delhi Ncr",
        },
      ],
      key: "location",
      value: [],
    },
    
    Tech_Stack: {
      options: [
        { label: "Javascript", option: "javascript" },
        { label: "React", option: "react" },
        { label: "Angular", option: "Angular" },
        { label: "Express", option: "Express" },
        { label: "java", option: "java" },
      ],
      key: false,
      value: [],
    },
    Role: {
      options: [
        {
          label: "Frontend",
          val: "Frontend",
        },
        {
            label: "Backend",
            val: "Backend",
        },
        {
          label: "Ios",
          val: "Ios",
        },
        {
          label: "Android",
          val: "Android",
        },
        {
            label: "Senior Engineer",
            val: "Senior Engineer",
        },
        {
          label: "Tech lead",
          val: "Tech lead",
        },
        
      ],
      key: "jobRole",
      value: [],
    },
    Min_Base_Pay: {
      options: [
        {
          label: "0L",
          val: 0,
        },
        {
          label: "10L",
          val: 10,
        },
        {
          label: "20L",
          val: 20,
        },
        {
          label: "30L",
          val: 30,
        },
        {
          label: "40L",
          val: 40,
        },
        {
          label: "50L",
          val: 50,
        },
        {
          label: "60L",
          val: 60,
        },
        
      ],
      key: "minJdSalary",
      value: [],
    },
  };
  
  /**
   * filter callbacks
   */
  export const filter_callbacks = {
    minExp: (el, data) => el?.minExp == data,
    companyName: (el, data) =>
      el?.companyName?.toLowerCase().includes(data?.toLowerCase()),
    location: (el, data) =>
      el?.location?.toLowerCase().includes(data?.toLowerCase()),
    jobRole: (el, data) =>
      el?.jobRole?.toLowerCase()?.includes(data?.toLowerCase()),
    minJdSalary: (el, data) => data <= el?.minJdSalary,
  };
  