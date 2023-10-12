import React from "react";

const DialogBox = () => {
  return (
    <dialog id="my_modal_3" className="modal">
      <div className="modal-box bg-black border-red-600 border">
        <div className="flex h-8 gap-4">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost mb-5">✕</button>
        </form>
        <h3 className="font-bold text-lg">راهنما</h3>
        </div>
        <div className="flex flex-col gap-5">
          <p className="py-4">
            توی این صفحه دور هر کدوم از سوالات یه رنگی داره که هرکدومش یه
            معنی داره
          </p>
          <p className="flex items-center gap-1">
            رنگ{" "}
            <div className="bg-pinkColor text-pinkbg-pinkColor w-3 h-3 rounded-full"></div>
            : <span className="mr-2">یعنی این سوال به تازگی پرسیده شده</span>
          </p>
          <div className="flex items-start">
            <p className="flex items-center gap-1">
              رنگ{" "}
              <div className="bg-green-400 text-green-400 w-3 h-3 rounded-full"></div>
              :
            </p>
            <p className="text-start mr-2">
              {" "}
              یعنی جواب سوال داده شده و سوال توسط نویسنده بسته شده است
            </p>
          </div>
          <div className="flex items-start">
            <p className="flex items-center gap-1">
              رنگ{" "}
              <div className="bg-yellow-400 text-yellow-400 w-3 h-3 rounded-full"></div>
              :
            </p>
            <p className="text-start mr-2">
              {" "}
              یعنی چند نفر به سوالی که پرسیده شده جواب دادن اما جواب سوالی که
              نویسنده نوشته نبوده و هنوز منتظر جوابه
            </p>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default DialogBox;
