# Design은 5개의 큰 라우터 덩어리 필요

# all, package, graphic, illustration, character

## 각 라우터에 REST API > GET, POST, DELETE, PATCH 구현

### GET은 전체 리스트 + 상세 리스트로 세부적으로는 2개로 나눌 예정

### DELETE는 특정 디자인만 지울수 있도록 설계 예정

### ctrl 부분이 비슷하게 진행된다면 통합해서 LOC를 줄이는 방향으로

### PUT METHOD는 구현 안해도 될듯 PATCH METHOD로 충분함
