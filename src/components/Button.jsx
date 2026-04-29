function Button(props){
    return (
      <butotn {...props} className="bg-slate-400 p-2 rounded-md text-white">
        {props.children}
      </butotn>
    );
    
}

export default Button;