var obj = {
    a: 1,
    b: function bb() {
        console.log(this);
    },
    c: function() {
        console.log(this.a);
    }
};

obj.b();
obj.c();

console.dir(obj.b);
console.dir(obj.c);

/**
 * 1. 변수 obj 선언
 * 2. 객체 생성/ 변수 obj에 객체 주소값 할당
 * 3. obj.b 메서드 호출 => obj.b 실행컨텍스트 생성
 * 4. this에 obj 바인딩
 * 5. this 출력
 */