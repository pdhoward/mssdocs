export default function HomePage() {
  return (
    <div className='mx-auto max-w-md'>
      <div className='text-center mt-32 text-3xl font-bold'>
        Welcome To MSS International!
      </div>
      <div className='text-center'>       
        <p>Use this page to redirect to content.</p>
      </div>
    </div>
  )
}

// Comment the following function to disable redirect
// and use custom homepage
export async function getServerSideProps(context) {
  return {
    redirect: {
      destination: '/intro/index',
      permanent: false
    }
  }
}
