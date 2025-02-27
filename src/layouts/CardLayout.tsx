type TCardLayoutProps = {
  category: string
  children: React.ReactNode
}

function CardLayout({ category, children }: TCardLayoutProps) {
  return (
    <div>
      <h2 className="mb-4 text-2xl font-bold">{category}</h2>
      <div className="space-y-4">{children}</div>
    </div>
  )
}

export default CardLayout
