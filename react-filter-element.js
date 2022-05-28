import React,{useState,useEffect} from 'react';



function useElementFilter(elem) {


const [items, setItems] = useState([]);
  
useEffect(() => {
	setItems(elem.current.children);
}, [])


		function filter(key){

		if(items !== undefined){
			for(var i = 0; i < items.length;i++){

			    var s = items[i].classList?.contains(key);

                if(key === '*'){
             	 items[i].style.display  = 'block';
             	}else{
             		s ? items[i].style.display  = 'block' :  items[i].style.display = "none";
             	}   
			  

			}
		}

	}

return [filter,items];

}

export default useElementFilter;