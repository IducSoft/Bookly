import React, { useRef } from "react";
import { FaUserAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AiOutlineCreditCard } from "react-icons/ai";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { GrNext } from "react-icons/gr";
import { NavLink } from "react-router-dom";

const PayCard = () => {
  const [chance, setChance] = useState(false);

  const formTarjeta = useRef();

  console.log(formTarjeta.current);

  const { handleSubmit, register, reset } = useForm();

  const submit = (data) => {
    const URL = "aca va la url de donde se hace el login del backend";
    axios
      .post(URL, data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    reset({
      numberTar: "",
      nameT: "",
      dateExp: "",
      securitycod: "",
    });
  };

  const chanceState = () => {
    setChance(true);
  };

  const showPopUP = () => {
    modal.showModal();
  };

  const closeModal = () => {
    modal.close();
  };

  return (
    <div>
      <div className="flex flex-col gap-1 mb-20 max-w-xs">
        <h2 className="text-lg font-medium mb-1">Medio de pago</h2>
        <div
          className="border-2 h-12 p-4  flex items-center mb-1  justify-between "
          onClick={chanceState}
        >
          <div className="flex items-center">
            <AiOutlineCreditCard className="mx-2 text-base text-slate-500" />
            <h3 className="ml-1">Targeta de credito o debito </h3>
          </div>

          <GrNext />
        </div>
        {!chance ? (
          <div className="border-2 h-12  flex items-center p-4 justify-between mb-14">
            <div className="flex items-center">
              <BsArrowUpRightSquare className="mx-2 text-base text-slate-500" />
              <h3 className="ml-1">Mercado pago</h3>
            </div>

            <GrNext />
          </div>
        ) : (
          <div className="max-w-xs mb-14 mt-8">
            <form
              ref={formTarjeta}
              className="flex flex-col  justify-center items-center"
              onSubmit={handleSubmit(submit)}
            >
              <div className="flex flex-col">
                <input
                  className="border-b-2 w-72"
                  type="string"
                  id="numberTar "
                  {...register("numberTar")}
                  placeholder=""
                />
                <label
                  className="text-sm font-normal text-slate-500 text-center"
                  htmlFor="numberTar"
                >
                  Numero de tarjeta
                </label>
              </div>
              <div className="flex flex-col">
                <input
                  className="border-b-2 w-72"
                  type="string"
                  id="nameT"
                  {...register("nameT")}
                />
                <label
                  className="text-sm font-normal text-slate-500  text-center"
                  htmlFor="nameT"
                >
                  Nombre del tit??lar
                </label>
              </div>
              <div className="flex gap-4">
                <div className="flex flex-col">
                  <input
                    className="border-b-2 w-32"
                    type="string"
                    id="dateExp"
                    {...register("dateExp")}
                  />
                  <label
                    className="text-sm font-normal text-slate-500  text-center"
                    htmlFor="dateExp"
                  >
                    Fecha de expiraci??n
                  </label>
                </div>

                <div className="flex flex-col">
                  <input
                    className="border-b-2 w-32"
                    type="string"
                    id="securitycod"
                    {...register("securitycod")}
                  />
                  <label
                    className="text-sm font-normal text-slate-500  text-center"
                    htmlFor="securitycod"
                  >
                    Codigo de seguridad
                  </label>
                </div>
              </div>
            </form>
          </div>
        )}

        <button
          className="bg-[#FDB849] text-black w-80 h-12 py-2 rounded-3xl font-semibold text-lg"
          onClick={showPopUP}
        >
          Comprar
        </button>
        {/*   */}

        <dialog id="modal">
          <div className="flex flex-col gap-1">
            <AiFillCheckCircle className=" text-[#FDB849] text-3xl text-center self-center m-1" />
            <h2 className="self-center text-base font-medium mb-1 pb-1">
              Compra realizada
            </h2>
            <h3 className="text-sm font-medium">
              Su compra fue procesada con ??xito.
            </h3>
            <p className="text-sm font-light">
              Revise su correo electronico ya fue enviado su
              <br /> libro, muchas gracias por su compra
            </p>
            <NavLink
              to={"/library"}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <button
                id="closeModal"
                onClick={closeModal}
                className="text-right m-4"
              >
                Ir a la biblioteca
              </button>
            </NavLink>
          </div>
        </dialog>

        {/* <button
              id="closeModal"
              onClick={closeModal}
              className="text-right m-4"
            >
              Ir a la biblioteca
            </button> */}
      </div>
    </div>
  );
};

export default PayCard;