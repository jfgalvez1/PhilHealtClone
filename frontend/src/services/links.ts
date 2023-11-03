export interface Link {
    title: string;
    linkUrl: string;
  }
  
  export const getLinks = async () => {
  
    const links = await fetch("http://localhost:5000/links/get").then(async (res)=> {
      const data: Array<Link> = await res.json();
      return data;
    });
  
    return links;
  }
  
  