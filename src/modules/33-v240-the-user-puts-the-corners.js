/* v240: the user puts the corners roughly — the butler then snaps each side to the real paper border nearby and follows a bent border */
function scRefine(src,q){let E=null;try{E=scEdges(src,src.width,src.height,640)}catch{}if(!E)return{q,E:null};const k=E.w/src.width;const Q=q.map(p=>[p[0]*k,p[1]*k]);const diag=Math.hypot(E.w,E.h),lines=E.V.concat(E.Hh);
 const side=j=>{const P=Q[j],R=Q[(j+1)%4];const dx=R[0]-P[0],dy=R[1]-P[1],len=Math.hypot(dx,dy);let best=null,bs=0;
  for(const l of lines){/* line: x·c + y·s = r ; direction (−s, c) */const cosA=Math.abs((-l.s*dx+l.c*dy)/len);if(cosA<Math.cos(8*Math.PI/180))continue;const d1=Math.abs(P[0]*l.c+P[1]*l.s-l.r),d2=Math.abs(R[0]*l.c+R[1]*l.s-l.r);if(Math.max(d1,d2)>diag*.022)continue;
   let sup=0,s0=0,s1=0,N=40;for(let t=0;t<N;t++){const u=(t+.5)/N,x0=P[0]+dx*u,y0=P[1]+dy*u,dd=x0*l.c+y0*l.s-l.r;let hit=0;for(let o=-1;o<=1&&!hit;o++){const xx=Math.round(x0-dd*l.c+l.c*o),yy=Math.round(y0-dd*l.s+l.s*o);if(xx<1||yy<1||xx>=E.w-1||yy>=E.h-1)continue;const pp=yy*E.w+xx;if(E.M[pp]>=E.thr*.4&&Math.abs(Math.cos(E.A[pp])*l.c+Math.sin(E.A[pp])*l.s)>.85)hit=1}sup+=hit;if(u<.25)s0+=hit;if(u>.75)s1+=hit}
   if(s0<N*.25*.5||s1<N*.25*.5)continue;
   if(sup/N<=.35)continue;/* paper on the inner side, something darker on the outer side — not a printed line or a fold */
   const cx=(Q[0][0]+Q[1][0]+Q[2][0]+Q[3][0])/4,cy=(Q[0][1]+Q[1][1]+Q[2][1]+Q[3][1])/4;let nx=l.c,ny=l.s;const mxp=(P[0]+R[0])/2,myp=(P[1]+R[1])/2;if(nx*(cx-mxp)+ny*(cy-myp)<0){nx=-nx;ny=-ny}
   const I=[],O=[];for(let t=.1;t<=.9;t+=.05){const x0=P[0]+dx*t,y0=P[1]+dy*t,dd=x0*l.c+y0*l.s-l.r,bx=x0-dd*l.c,by=y0-dd*l.s;for(let off=3;off<=6;off+=1.5){let xx=Math.round(bx+nx*off),yy=Math.round(by+ny*off);if(xx>=0&&yy>=0&&xx<E.w&&yy<E.h)I.push(E.L[yy*E.w+xx]);xx=Math.round(bx-nx*off);yy=Math.round(by-ny*off);if(xx>=0&&yy>=0&&xx<E.w&&yy<E.h)O.push(E.L[yy*E.w+xx])}}
   if(O.length>4&&I.length>4){I.sort((a,b)=>a-b);O.sort((a,b)=>a-b);const iv=I[Math.floor(I.length*.7)],ov=O[Math.floor(O.length*.7)];if(Math.abs(iv-ov)/Math.max(1,iv)<.015)continue}
   const sc=sup/N-(d1+d2)/2/(diag*.022)*.7;if(sc>bs){bs=sc;best=l}}return best};
 const L4=[0,1,2,3].map(side);let out=Q.map((p,j)=>{const a=L4[(j+3)%4],b=L4[j];if(!a||!b)return p;const x=E.X(a,b);if(!x||Math.hypot(x[0]-p[0],x[1]-p[1])>diag*.028)return p;return x});
 /* keep a snapped corner only if the two sheet edges at it really get better */
 const segS=(P,R)=>{const dx=R[0]-P[0],dy=R[1]-P[1],len=Math.hypot(dx,dy);if(len<6)return 0;const nx=-dy/len,ny=dx/len;let ok=0,N=40;for(let t=0;t<N;t++){const u=(t+.5)/N;let hit=0;for(let o=-1.5;o<=1.5&&!hit;o+=.75){const xx=Math.round(P[0]+dx*u+nx*o),yy=Math.round(P[1]+dy*u+ny*o);if(xx<1||yy<1||xx>=E.w-1||yy>=E.h-1)continue;const pp=yy*E.w+xx;if(E.M[pp]>=E.thr*.4&&Math.abs(Math.cos(E.A[pp])*nx+Math.sin(E.A[pp])*ny)>.85)hit=1}ok+=hit}return ok/N};
 out=out.map((p,j)=>{if(p===Q[j])return p;const pr=out[(j+3)%4],nx2=out[(j+1)%4];const before=segS(pr,Q[j])+segS(Q[j],nx2),after=segS(pr,p)+segS(p,nx2);return after>before+.05?p:Q[j]});
 return{q:out.map(p=>[p[0]/k,p[1]/k]),E,k}}
/* bent borders from the edge picture (when the sheet is not a clean bright blob) */
function scBendsE(E,k,q){if(!E)return null;const Q=q.map(p=>[p[0]*k,p[1]*k]);const cx=(Q[0][0]+Q[1][0]+Q[2][0]+Q[3][0])/4,cy=(Q[0][1]+Q[1][1]+Q[2][1]+Q[3][1])/4,N=25,out=[];
 for(let s2=0;s2<4;s2++){const A=Q[s2],B=Q[(s2+1)%4],L=Math.hypot(B[0]-A[0],B[1]-A[1]);let nx=-(B[1]-A[1])/L,ny=(B[0]-A[0])/L;if(nx*((A[0]+B[0])/2-cx)+ny*((A[1]+B[1])/2-cy)<0){nx=-nx;ny=-ny}
  const R=Math.max(3,L*.045),raw=[];for(let j=0;j<N;j++){const t=j/(N-1),px=A[0]+(B[0]-A[0])*t,py=A[1]+(B[1]-A[1])*t;let bo=null,bm=E.thr*.5;for(let o=-R;o<=R;o+=.5){const xx=Math.round(px+nx*o),yy=Math.round(py+ny*o);if(xx<1||yy<1||xx>=E.w-1||yy>=E.h-1)continue;const pp=yy*E.w+xx,m=E.M[pp];if(m>bm&&Math.abs(Math.cos(E.A[pp])*nx+Math.sin(E.A[pp])*ny)>.8){bm=m;bo=o}}raw.push(bo)}
  const good=raw.filter(v=>v!==null).length;if(good<N*.75){out.push({nx,ny,o:new Float32Array(N)});continue}
  const f=raw.map(v=>v===null?0:v);const med=f.map((_,j)=>{const w=f.slice(Math.max(0,j-2),j+3).sort((a,b)=>a-b);return w[w.length>>1]});
  const a0=med[0],a1=med[N-1];const o=new Float32Array(N);let mx=0,jump=0;for(let j=0;j<N;j++){o[j]=(med[j]-(a0+(a1-a0)*j/(N-1)))/k;mx=Math.max(mx,Math.abs(o[j]));if(j&&Math.abs(med[j]-med[j-1])>R*.35)jump++}
  if(jump>2||mx*k<L*.006)o.fill(0);out.push({nx,ny,o})}return out}
/* square → quad homography (Heckbert) */
function scHomo(q){const[x0,y0]=q[0],[x1,y1]=q[1],[x2,y2]=q[2],[x3,y3]=q[3];const dx1=x1-x2,dx2=x3-x2,dy1=y1-y2,dy2=y3-y2,sx=x0-x1+x2-x3,sy=y0-y1+y2-y3;let g3=0,h3=0;
 if(Math.abs(sx)>1e-9||Math.abs(sy)>1e-9){const den=dx1*dy2-dx2*dy1;g3=(sx*dy2-dx2*sy)/den;h3=(dx1*sy-sx*dy1)/den}
 const a=x1-x0+g3*x1,b=x3-x0+h3*x3,c=x0,d=y1-y0+g3*y1,e=y3-y0+h3*y3,f=y0;return(u,v)=>{const z=g3*u+h3*v+1;return[(a*u+b*v+c)/z,(d*u+e*v+f)/z]}}
/* how far each real sheet edge bends away from the straight line between its corners (pixels of the full image, along the outward normal) */
function scBends(det,q,W,H){if(!det||!det.mask)return null;const{mask,mw,mh}=det;const at=(x,y)=>{const xi=Math.round(x*mw/W),yi=Math.round(y*mh/H);return xi>=0&&yi>=0&&xi<mw&&yi<mh&&mask[yi*mw+xi]};
 const cx=(q[0][0]+q[1][0]+q[2][0]+q[3][0])/4,cy=(q[0][1]+q[1][1]+q[2][1]+q[3][1])/4,N=25,out=[];
 for(let s=0;s<4;s++){const A=q[s],Bp=q[(s+1)%4];const L=Math.hypot(Bp[0]-A[0],Bp[1]-A[1]);let nx=-(Bp[1]-A[1])/L,ny=(Bp[0]-A[0])/L;const mxp=(A[0]+Bp[0])/2,myp=(A[1]+Bp[1])/2;if(nx*(mxp-cx)+ny*(myp-cy)<0){nx=-nx;ny=-ny}
  const R=L*.06,step=Math.max(1,Math.max(W,H)/Math.max(mw,mh)/2),off=[];let good=0;
  for(let k=0;k<N;k++){const t=k/(N-1),px=A[0]+(Bp[0]-A[0])*t,py=A[1]+(Bp[1]-A[1])*t;let last=null;for(let o=-R;o<=R;o+=step){if(at(px+nx*o,py+ny*o))last=o}off.push(last);if(last!==null&&Math.abs(last)<R*.98)good++}
  if(good<N*.7){out.push({nx,ny,o:new Float32Array(N)});continue}
  for(let k=0;k<N;k++)if(off[k]===null)off[k]=0;const sm=off.map((_,k)=>{let s2=0,c=0;for(let j=-2;j<=2;j++){const v2=off[k+j];if(v2!==undefined){s2+=v2;c++}}return s2/c});
  const a0=sm[0],a1=sm[N-1];const o=new Float32Array(N);let mx=0;for(let k=0;k<N;k++){o[k]=sm[k]-(a0+(a1-a0)*k/(N-1));mx=Math.max(mx,Math.abs(o[k]))}
  if(mx<L*.006)o.fill(0);else{const cap=L*.05;for(let k=0;k<N;k++)o[k]=Math.max(-cap,Math.min(cap,o[k]))}out.push({nx,ny,o})}return out}
function scWarp(img,q,bends){const W0=img.width,H0=img.height;const dist=(a,b)=>Math.hypot(a[0]-b[0],a[1]-b[1]);let w=Math.max(dist(q[0],q[1]),dist(q[3],q[2])),h=Math.max(dist(q[0],q[3]),dist(q[1],q[2]));
 {const r=w/h;for(const t of [1/Math.SQRT2,Math.SQRT2,8.5/11,11/8.5]){if(Math.abs(r-t)/t<.08){if(t<1)h=w/t;else w=h*t;break}}}const s=Math.min(1.25,2400/Math.max(w,h));w=Math.round(w*s);h=Math.round(h*s);const Hm=(()=>{const c0=[(q[0][0]+q[1][0]+q[2][0]+q[3][0])/4,(q[0][1]+q[1][1]+q[2][1]+q[3][1])/4];return scHomo(q.map(p=>[p[0]+(c0[0]-p[0])*.006,p[1]+(c0[1]-p[1])*.006]))})();
 const sc=document.createElement('canvas');sc.width=W0;sc.height=H0;const sx=sc.getContext('2d',{willReadFrequently:!0});sx.drawImage(img,0,0);const S=sx.getImageData(0,0,W0,H0).data;
 const N=25,ev=(o,t)=>{if(!o)return 0;const f=t*(N-1),i0=Math.floor(f),i1=Math.min(N-1,i0+1);return o[i0]+(o[i1]-o[i0])*(f-i0)};
 const map=(u,v)=>{let[x,y]=Hm(u,v);if(bends){const T=bends[0],Rr=bends[1],Bb=bends[2],Ll=bends[3];const t=ev(T.o,u),r=ev(Rr.o,v),b=ev(Bb.o,1-u),l=ev(Ll.o,1-v);
   x+=(1-v)*t*T.nx+u*r*Rr.nx+v*b*Bb.nx+(1-u)*l*Ll.nx;y+=(1-v)*t*T.ny+u*r*Rr.ny+v*b*Bb.ny+(1-u)*l*Ll.ny}return[x,y]};
 const G=16,gw=Math.ceil(w/G)+1,gh=Math.ceil(h/G)+1,GX=new Float32Array(gw*gh),GY=new Float32Array(gw*gh);for(let j=0;j<gh;j++)for(let i2=0;i2<gw;i2++){const p=map(Math.min(1,i2*G/w),Math.min(1,j*G/h));GX[j*gw+i2]=p[0];GY[j*gw+i2]=p[1]}
 const oc=document.createElement('canvas');oc.width=w;oc.height=h;const ox=oc.getContext('2d');const O=ox.createImageData(w,h),D=O.data;
 for(let y=0;y<h;y++){const gj=Math.min(gh-2,Math.floor(y/G)),fy=y/G-gj;for(let x=0;x<w;x++){const gi=Math.min(gw-2,Math.floor(x/G)),fx=x/G-gi,k0=gj*gw+gi;
  const X=(GX[k0]*(1-fx)+GX[k0+1]*fx)*(1-fy)+(GX[k0+gw]*(1-fx)+GX[k0+gw+1]*fx)*fy,Y=(GY[k0]*(1-fx)+GY[k0+1]*fx)*(1-fy)+(GY[k0+gw]*(1-fx)+GY[k0+gw+1]*fx)*fy;
  const xi=Math.max(0,Math.min(W0-2,Math.floor(X))),yi=Math.max(0,Math.min(H0-2,Math.floor(Y))),ax=Math.max(0,Math.min(1,X-xi)),ay=Math.max(0,Math.min(1,Y-yi));const p=(yi*W0+xi)*4,p2=p+W0*4,o=(y*w+x)*4;
  for(let c=0;c<3;c++)D[o+c]=(S[p+c]*(1-ax)+S[p+4+c]*ax)*(1-ay)+(S[p2+c]*(1-ax)+S[p2+4+c]*ax)*ay;D[o+3]=255}}
 ox.putImageData(O,0,0);return oc}
/* even paper: divide by the paper's own brightness (estimated without the text), so creases, shadows and uneven light vanish */
function scClean(cv,mode,strong){if(mode==='orig')return cv;const w=cv.width,h=cv.height;const x=cv.getContext('2d',{willReadFrequently:!0});const I=x.getImageData(0,0,w,h),d=I.data,n=w*h;
 const f=Math.max(8,Math.round(Math.max(w,h)/(strong?85:110))),bw=Math.ceil(w/f),bh=Math.ceil(h/f);const chans=mode==='doc'?1:3;const BG=[];
 for(let c=0;c<chans;c++){let b=new Float32Array(bw*bh);for(let by=0;by<bh;by++)for(let bx=0;bx<bw;bx++){let m=0;for(let y=by*f;y<Math.min(h,by*f+f);y+=2)for(let x2=bx*f;x2<Math.min(w,bx*f+f);x2+=2){const j=(y*w+x2)*4;const v=chans===1?(.299*d[j]+.587*d[j+1]+.114*d[j+2]):d[j+c];if(v>m)m=v}b[by*bw+bx]=m}
  for(let it=0;it<4;it++){const t=new Float32Array(b.length);for(let y=0;y<bh;y++)for(let x2=0;x2<bw;x2++){let m=0;for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){const yy=Math.min(bh-1,Math.max(0,y+dy)),xx=Math.min(bw-1,Math.max(0,x2+dx));if(b[yy*bw+xx]>m)m=b[yy*bw+xx]}t[y*bw+x2]=m}b=t}
  b=scBox(scBox(b,bw,bh,2),bw,bh,2);BG.push(b)}
 const bgAt=(b,x2,y)=>{const fx=Math.min(bw-1.001,Math.max(0,x2/f-.5)),fy=Math.min(bh-1.001,Math.max(0,y/f-.5)),i0=Math.floor(fx),j0=Math.floor(fy),ax=fx-i0,ay=fy-j0,k=j0*bw+i0;return(b[k]*(1-ax)+b[k+1]*ax)*(1-ay)+(b[k+bw]*(1-ax)+b[k+bw+1]*ax)*ay};
 for(let y=0;y<h;y++)for(let x2=0;x2<w;x2++){const j=(y*w+x2)*4;
  if(mode==='doc'){const L=.299*d[j]+.587*d[j+1]+.114*d[j+2];let v=L/Math.max(40,bgAt(BG[0],x2,y));v=strong?(v-.3)/(.75-.3):(v-.32)/(.8-.32);v=v<0?0:v>1?1:v;v=v*v*(3-2*v);const o=255*Math.pow(v,1.15);d[j]=d[j+1]=d[j+2]=o}
  else{for(let c=0;c<3;c++){let v=d[j+c]/Math.max(40,bgAt(BG[c],x2,y));v=strong?(v-.06)/(.84-.06):(v-.06)/(.88-.06);v=v<0?0:v>1?1:v;d[j+c]=255*Math.pow(v,1.08)}}}
 const oc=document.createElement('canvas');oc.width=w;oc.height=h;oc.getContext('2d').putImageData(I,0,0);
 if(mode==='doc'){/* light unsharp mask for crisp print */const o2=oc.getContext('2d',{willReadFrequently:!0}),J=o2.getImageData(0,0,w,h),e=J.data;const Lm=new Float32Array(n);for(let p=0;p<n;p++)Lm[p]=e[p*4];const Bl=scBox(Lm,w,h,1);for(let p=0;p<n;p++){const v=Math.max(0,Math.min(255,Lm[p]+.6*(Lm[p]-Bl[p])));e[p*4]=e[p*4+1]=e[p*4+2]=v}o2.putImageData(J,0,0)}
 return scEdgeWhite(oc)}
