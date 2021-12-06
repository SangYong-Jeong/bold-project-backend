# MongoDB에 들어갈 각 Data Schema

## Design Data Schema

1. design/character

- 프로젝트 번호(number)
- 제목(title) - STRING
- 내용(content) - STRING
- 이미지(imgs) 최소 3개 이상 가정 -> multer 이용 -> 안에 배열로 넣기
- 작성일(createdAt)
- main에 보일 대표이미지(rep) (Boolean: true / false)

1. design/graphic

- 프로젝트 번호(number)
- 제목(title)
- 내용(content)
- 이미지(imgs) 최소 3개 이상 가정 -> multer 이용
- 작성일(createdAt)
- main에 보일 대표이미지(rep) (Boolean: true / false)

1. design/illustration

- 프로젝트 번호(number)
- 제목(title)
- 내용(content)
- 이미지(imgs) 최소 3개 이상 가정 -> multer 이용
- 작성일(createdAt)
- main에 보일 대표이미지(rep) (Boolean: true / false)

1. design/package

- 프로젝트 번호(number)
- 제목(title)
- 내용(content)
- 이미지(imgs) 최소 3개 이상 가정 -> multer 이용
- 작성일(createdAt)
- main에 보일 대표이미지(rep) (Boolean: true / false)
