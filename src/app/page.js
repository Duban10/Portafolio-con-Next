// import Head from 'next/head';
'use client'
import Principal from "../components/Principal";

export default function Home() {
  return (
    <>
        {/* <Head>
            <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        </Head> */}
        <Principal />
        {/* <button className="form-btn" type="submit" data-form-btn onClick={ async () => {
            const res = await fetch('/api/send', {
                method: 'POST'
            })
            const data = await res.json()
            console.log(data);
        }}>enviar email</button> */}

      </>
  );
}
