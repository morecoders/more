


//loading.tsx

export default function Loader({label}:{label: string}) {
  return (
    <div className="flex items-center justify-center h-screen">
      <p className="text-gray-500 text-lg">{label || "Loading"}</p>
    </div>
  );
}
