        // var vs let vs const
        var a;
        // var는 과거의 잔재 이제는 쓸 일이 없음. 왜냐면 복잡해서
        let b;
        const c = c;
        // const는 반드시 뭐 = 뭐 이렇게 할당을 해주어야한다

        function compareLet () {
            let num1 = 10;
            num1 = 20;
            alert('num1의 값은 ' +num1+ '입니다')
            // 위의 결과는 num1의 값은 20입니다 이다.
            // 따라서 let의 값은 할당해줄 때마다 변한다.
            // 처음에는 10을 할당해주었고 이후 20을 할당해주었기에 num1의 값은 20이 된거다
        }

        function compareConst () {
            const num2 = 30;
            num2 = 20;
            alert('num2의 값은 ' +num2+ '입니다')
            // 위의 결과는 아무런 팝업창도 뜨지 않는다.
            // 왜냐하면 const의 값은 처음에 할당된 값으로 고정되고 이후 새로운 값을 할당할 수 없다.
            // 그렇기에 num2 = 20; 을 해준다고 해도 num2의 값이 30에서 20으로 변하는 것이 아니고
            // 오류가 나서 아무런 팝업창도 뜨지 않는것이다.
        }