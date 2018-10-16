function primeira (x='', y='', z=false){
    if (x && y && z){
        return ((x + y) / z);
    } else if (x && y){
        return (x + y);
    } else if (x){
        return x;
    }
    else return false
}