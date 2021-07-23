import Image from "next/image"
import { createClient } from "contentful";
import KesenianCard from "../../components/KesenianCard"

export async function getStaticProps() {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  })

  const res = await client.getEntries({ content_type: 'kesenian'})

  return {
      props: {
          kesenian: res.items
      }
  }
}

const Kesenian = () => {
    return ( 
        <div className='list-kesenian'>
            {kesenian.map(kesenian => (
                <KesenianCard key={kesenian.sys.id} kesenian={kesenian}/>
            ))}
        </div>
     );
}
 
export default Kesenian;