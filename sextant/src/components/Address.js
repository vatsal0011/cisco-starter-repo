import { useState,useEffect } from "react";
export const Address = () => {
    const [ipv4, setIpv4] = useState('')
    const [ipv6,setIpv6] = useState('')

    useEffect(() => {
      fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => setIpv4(data.ip))
        .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        fetch('https://api64.ipify.org?format=json')
          .then(response => response.json())
          .then(data1 => setIpv6(data1.ip))
          .catch(error => console.log(error))
      }, []);
  
    return (
      <div>
        <h4>Your IPv4 Address is: {ipv4}</h4>
        <h4>Your IPv6 Address is: {ipv6}</h4>
      </div>
    )
  }