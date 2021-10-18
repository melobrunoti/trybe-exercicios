const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

test('Testando se converte String para upper case', (done)=>{
  uppercase('Hello',(str) =>{
    try{
      expect(str).toBe('HELLO')
      done();
    } catch(error){
      done (error)
    }
  })
})