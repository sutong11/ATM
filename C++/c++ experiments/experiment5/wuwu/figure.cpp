// figure.cpp: implementation of the figure class.
//
//////////////////////////////////////////////////////////////////////

#include "figure.h"

//////////////////////////////////////////////////////////////////////
// Construction/Destruction
//////////////////////////////////////////////////////////////////////

figure::figure()
{

}

figure::~figure()
{

}

void figure::set_dim(double i, double j)
{
x=i; y=j;
}

void figure::show_area()
{
cout<<"No area computation defined for this class\n";
}
