// triangle.cpp: implementation of the triangle class.
//
//////////////////////////////////////////////////////////////////////

#include "triangle.h"

//////////////////////////////////////////////////////////////////////
// Construction/Destruction
//////////////////////////////////////////////////////////////////////

triangle::triangle()
{

}

triangle::~triangle()
{

}

void triangle::show_area()
{
cout<<"Triangle with height"<<x<<"  and base "<<y;
cout<<" has an area of "<<x*0.5*y<<endl;
}
