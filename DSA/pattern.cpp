#include<iostream>

using namespace std;
void solve(){
    //    1
    //   212
    //  32123
    // 4321234
    int n;
    cout<<"ente the number"<<endl;
    cin>>n;
    for(int i=1;i<=n;i++){
        for(int j=1;j<=n-i;j++){
            cout<<" ";
        }
        for(int j=i;j>=1;j--){
            cout<<"+";
        }
        for(int j=2;j<=i;j++){
            cout<<"+";
        }
        cout<<endl;
    }

}
int main(){
    solve();
    return 0;
}
