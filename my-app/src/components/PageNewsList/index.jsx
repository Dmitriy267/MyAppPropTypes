import React, {useState} from "react";

import { useForm } from "react-hook-form";
import ArticleComponent1 from '../ArticleComponent1';
import Button from '../Button';
import styles from './PageNewsList.module.scss';
const Articles=[{
  id:1,
  title:'Баня Русская С душой',
  description:'В Бане С душой вы можете посетить традиционную баню на дровах - проверенную веками и особенно любимую жителями больших городов. Уютный звук сгорающих в печи дров, запах натурального дерева рождают у нас добрые чувства.',
},
{
  id:2,
  title:' Банька с веничком на двоих',
  description:'В сауну Банька с веничком на двоих вы можете прийти веселой компанией, арендовать парную на всех, пообщаться и отдохнуть. У нас вы сможете найти : бодрящую купель, пахучие веники, бильярд, уютную комнату отдыха ',
  
},
{
  id:3,
  title:'Баня На Волге',
  description:'К Вашим услугам представлены: парная с немецкой дровяной печью (топиться дубовыми дровами). Самый большой бассейн (Саратовское водохранилище).',
}
];

function PageNewsList() {
    const [data, setData]=useState(false);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
    
      console.log(data);
      setData(data=>!data);
      const {searchArticles}=data;
    
    }
  
      return (
        <>
          <div className={styles.search}>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("searchArticles", { required: true, maxLength: 20 })}placeholder="Поиск по статьям" />
            <Button>Найти</Button>
            </form>
          </div>
    
            <div className={styles.result__div}>
           {data&&Articles.map((el, id)=><ArticleComponent1 key={id}  title={el.title} description={el.description} />)}
            
          </div>
       
    
       
        </>
      );
    }
 
    
    export default PageNewsList;
    

