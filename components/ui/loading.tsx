

//loading.tsx

export default function Loader({text}:{text: string}) {
  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-gray-500 text-lg">{text || "Loading"}</p>
    </div>
  );
}
