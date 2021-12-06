# MongoDB에 들어갈 각 Data Schema

## Design Data Schema

\*\* 각 portfolio마다 MongoDB에서 다른 Collection 쓰면 cate field 필요없음 ,but Portfolio라는 하나의 Collection에서 구분할 경우 cate field 넣고 쿼링 할 때 cate field로 구분해서 가져와야함

1. design/character

- 제목(title) - STRING
- 내용(content) - STRING
- 이미지(imgs) 최소 3개 이상 가정 -> multer 이용 -> 배열 안에 객체 구조로 가져가기,
  {
  id: NUMBER, -> multer 돌리면서 middleware로 처리 해야할듯
  src: STRING (-> multer 이용해서 storage 안에 있는 파일들 static rotuer로 잡고 프론트에서 그걸 이용해서 이미지 보이게 하기)
  rep: Boolean (각 분야별 대표이미지는 true)
  }
- 작성일(publishedDate) - {type: Date, default: Date.now}
- - cate - { type: String, default: 'character' }

1. design/graphic

- 제목(title)
- 내용(content)
- 이미지(imgs) 최소 3개 이상 가정 -> multer 이용 -> 배열 안에 객체 구조로 가져가기,
  {
  id: NUMBER,
  src: STRING (-> multer 이용해서 storage 안에 있는 파일들 static rotuer로 잡고 프론트에서 그걸 이용해서 이미지 보이게 하기)
  rep: Boolean (각 분야별 대표이미지는 true)
  }
- 작성일(publishedDate) - {type: Date, default: Date.now}
- - cate - { type: String, default: 'graphic' }

1. design/illustration

- 제목(title)
- 내용(content)
- 이미지(imgs) 최소 3개 이상 가정 -> multer 이용 -> 배열 안에 객체 구조로 가져가기,
  {
  id: NUMBER,
  src: STRING (-> multer 이용해서 storage 안에 있는 파일들 static rotuer로 잡고 프론트에서 그걸 이용해서 이미지 보이게 하기)
  rep: Boolean (각 분야별 대표이미지는 true)
  }
- 작성일(publishedDate) - {type: Date, default: Date.now}
- - cate - { type: String, default: 'illustration' }

1. design/package

- 제목(title)
- 내용(content)
- 이미지(imgs) 최소 3개 이상 가정 -> multer 이용 -> 배열 안에 객체 구조로 가져가기,
  {
  id: NUMBER,
  src: STRING (-> multer 이용해서 storage 안에 있는 파일들 static rotuer로 잡고 프론트에서 그걸 이용해서 이미지 보이게 하기)
  rep: Boolean (각 분야별 대표이미지는 true)
  }
- 작성일(publishedDate) - {type: Date, default: Date.now}
- - cate - { type: String, default: 'package' }

## sort 내림차순 + limit(한 번에 보여지는 갯수) -> 10개

### offset 기능은 mongoose에서 skip 메서드로 구현

- -> skip의 파라미터는 ((page - 1) \* limit메서드의 파라미터)로 구현
- 여기서 page는 쿼리값으로 받자 (option 값들은 query로 받는다.)
