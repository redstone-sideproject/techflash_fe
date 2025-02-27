type TContentLayoutProps = {
  children: React.ReactNode
}

function ContentLayout({ children }: TContentLayoutProps) {
  return <main className="mx-auto min-h-screen p-10">{children}</main>
}

export default ContentLayout
