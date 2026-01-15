#include <iostream>
using namespace std;
static const long long m=1000000007;
long long fib(long long a,long long b,long long n){
    if (n==0)return b;
    long long c=a+b;
    return fib(b,c,n-1);
}
int main()
{
    int n;
    cin>>n;
    int r=fib(0,1,n);
    r%=m;
    cout<<r;
    return 0;
}