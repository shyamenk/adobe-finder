import { SignIn } from '@clerk/nextjs/app-beta'

interface PageProps {
  searchParams: {
    redirectUrl?: string
  }
}
export default function Page({ searchParams }: PageProps) {
  const { redirectUrl } = searchParams
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex justify-center">
          <SignIn redirectUrl={redirectUrl || '/'} />
        </div>
      </div>
    </section>
  )
}
