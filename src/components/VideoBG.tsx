
export default function VideoBG({src}:{src :string}) {
  return (
    <video
      autoPlay
      loop
      muted
      className="w-full h-full object-cover absolute -z-40"
    >
      <source src={src} type="video/mp4" />
    </video>

  )
}
