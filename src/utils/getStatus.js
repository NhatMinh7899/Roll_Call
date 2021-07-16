export default (status = 'absent') => {
    switch (status){
        case 'ontime':{
            return "Đúng Giờ";
        }
        case 'late':{
            return "Đi Trễ";
        }  
        default:
            return "Vắng Mặt";
    }
}
