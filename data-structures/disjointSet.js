class UnionFind {
    
    UnionFind(size) {
        this.root = [];
        for(const i = 0; i < size; i++){
            this.root[i] = i;
        }
    }

    find(index){
        return this.root[index];
    }

    unionSet(x, y){
        const rootX = find(x);
        const rootY = findy(y);
        
    }
}