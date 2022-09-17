export const Card = ({ heroe }) => {
  return (
    <div className="bg-[#2c3c42] text-white rounded-3xl flex flex-col justify-center items-center m-6 	">
      <img
        className=" rounded-xl  border-[#8C0F0F] border-4 shadow-xl "
        src={heroe.imagen}
        alt="img"
      />

      <div className="px-4 pb-4">
        <h1 className="mt-2 font-extrabold text-2xl">{heroe.nombre}</h1>
        <h3 className="font-semibold text-lg">{heroe.editorial}</h3>
        <h6 className="my-2">{heroe.estreno}</h6>
        <p>{heroe.descripcion}</p>
      </div>
      <div>
        <h3 className="mb-4 p-2 bg-white/50 shadow-sm shadow-white rounded-full font-bold">
          {heroe.poderes}
        </h3>
      </div>
    </div>
  );
};
