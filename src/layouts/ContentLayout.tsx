type TContentLayoutProps = {
  children: React.ReactNode
}

function ContentLayout({ children }: TContentLayoutProps) {
  return (
    <main className="mx-auto flex min-h-screen flex-col p-10">{children}</main>
  )
}

export default ContentLayout
