
const InputMain = ({width, ...rest}) => {
      return (
        <input  className={`appearance-none  invalid:border-red-600 outline-none p-2 text-main-black placeholder:text-main-gray text-sm border-[2px] rounded-[10px] border-main-black ${width}`}
        {...rest} />
      );
    };
      
    export default InputMain;